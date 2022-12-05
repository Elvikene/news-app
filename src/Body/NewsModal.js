import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../holder.png';
import Figure from 'react-bootstrap/Figure';

// как и любая функция в JS так же и компоненты принимают props (properties)
// компонент может принять бесконечное количество properties но хранит их все в одной переменной - тип объекта
// properties передаются в компонент так же как и 
function NewsModalComponent({ setShow, show, article }) {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image
                            alt=""
                            src={article.urlToImage || noImage}
                        />
                        <Figure.Caption>
                            {article.url}
                        </Figure.Caption>
                    </Figure>
                    <p>{article.content}</p>
                    <Button variant="outline-primary" href={article.url} target="_blank" className="w-100">
                            Read more
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModalComponent;
