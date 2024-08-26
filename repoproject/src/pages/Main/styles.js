import styled from 'styled-components';

export const Container = styled.div`
max-width:700px;
background: #fff;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0, 0.2);
padding: 20px;
margin:80px auto;
h1{
    font-size: 20 px;
    display: flex;
    align-items: center;
    flex-direction: row;
    svg{
        margin-right: 10px;
    }
}
`;
export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction:row;
    input{
        flex: 1;
        border: 1px solid #ddd;
        padding: 10 px 15 px;
        border-radius : 4 px;
        font-size:17 px;

    }
`;
export const SubmitButton = styled.button.attrs({ type: 'submit'})`

    background: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
