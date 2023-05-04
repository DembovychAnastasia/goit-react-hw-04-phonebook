import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Item, List } from './ContactList.styled'
import { RiDeleteBin6Line } from 'react-icons/ri';

export const ContactList = ({ contacts, onDelete }) => {
    //console.log(contacts);
    return (
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <span>{name}:</span>
              <span>{number}</span>
  
              <Btn type="button" onClick={() => onDelete(id)}>
                <RiDeleteBin6Line size="16" />
              </Btn>
            </Item>
          );
        })}
      </List>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
    onDelete: PropTypes.func.isRequired,
  };