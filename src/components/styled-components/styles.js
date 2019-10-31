import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`;

export const Value = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
`;

export const StatContainer = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

export const ValuesContainer = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;

  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
`;

export const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;
