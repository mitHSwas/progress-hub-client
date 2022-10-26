import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';


const Categories = (props) => {
    const { name, id } = props.category;

    return (
        <div>
            <ButtonGroup vertical className="my-2 w-100">
                <Link className="w-100" to={`/category/${id}`}><Button className="w-100" variant="outline-secondary">{name}</Button></Link>
            </ButtonGroup>
        </div>
    );
};

export default Categories;