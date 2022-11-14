import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import moment from 'moment';
import {getEverything} from '../../Services/apiServices';
import "react-datepicker/dist/react-datepicker.css";



function FormComponent({ show, handleClose, setFormResponse}) {
    const [startDateFrom, setStartDateFrom] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());
    const dateFormat ="dd.MM.yyyy";
   

    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'German', code: 'de' },
        { label: 'French', code: 'fr' },
        { label: 'Spanish', code: 'es' },
    ];

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1);
    }

    async function handleSubmit(event) {

        event.preventDefault();
        const data = {
            q: event.target.q.value,
            from: moment(startDateFrom).format("YYYY-MM-DDT23:59:59:999"),
            to: moment(startDateTo).format("YYYY-MM-DDT00:00:00.000"),
            language: event.target.language.value,
            searchIn: [...event.target.searchIn].filter(input => input.checked).map(input => input.value).join(','),
        };

        if(moment(data.from).isAfter(data.to)) {
            alert("Wrong data from");
            return;
        }

        const response = await getEverything(data);
        const responseData =await response.json();
        setFormResponse(responseData);
    }

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords
                        </Form.Label>
                        <Form.Control type="text" name="q" placeholder="Enter keywords or phrases" />
                        <Form.Text className="text-muted">
                            Advanced Search is supported here
                        </Form.Text>
                    </Form.Group>

                    {['title', 'decription', 'content'].map((type) => (
                        <div key={`${type}`} className="mb-3">
                            <Form.Check
                                label={capitalize(type)}
                                name="searchIn"
                                type="checkbox"
                                value={type}
                                id={`inline-${type}-1`}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From - To
                        </Form.Label>
                        <InputGroup className="mb-3 flex-nowrap p-2">

                        <DatePicker 
                        className="form-control"
                        selected={startDateFrom} 
                        onChange={(date) => setStartDateFrom(date)}
                        name="from"
                        dateFormat={dateFormat} />
                        
                        <DatePicker 
                        className="form-control"
                        selected={startDateTo} 
                        onChange={(date) => setStartDateTo(date)}
                        name="to"
                        dateFormat={dateFormat}  />

                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select language
                        </Form.Label>
                        <Form.Select name="language">
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default FormComponent;