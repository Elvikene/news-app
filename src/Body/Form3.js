import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormComponent({ show, handleClose }) {

    let title = ['title', 'decription', 'content'];
    let type = title.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });

    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'German', code: 'de' },
        { label: 'French', code: 'fr' },
        { label: 'Spanish', code: 'es' },
    ];

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter keywords or phrases" />
                        <Form.Text className="text-muted">
                            Advanced Search is supported here
                        </Form.Text>
                    </Form.Group>

                    {type.map((type) => (
                        <div key={`${type}`} className="mb-3">
                            <Form.Check
                                label={type}
                                name="searchIn"
                                type="checkbox"
                                id={`inline-${type}-1`}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From - To
                        </Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control aria-label="First name" />
                            <Form.Control aria-label="Last name" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select language
                        </Form.Label>
                        <Form.Select >
                            {languages.map((lang) => (
                                <option>{lang.label}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Form>

                <Button variant="primary" type="submit" className="w-100">
                    Search
                </Button>


            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default FormComponent;