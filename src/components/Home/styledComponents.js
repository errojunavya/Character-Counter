import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const AppContainer = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  border-radius: 15px;
  padding-top: 150px;
`
export const LeftContainer = styled.div`
  background-color: #ffc533;
  height: 80vh;
  width: 40vw;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
`
export const LeftHeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 10px;
`
export const HeadingText = styled.h1`
  color: #334155;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const LeftEmptyImage = styled.img`
  height: 400px;
  width: 100%;
  padding: 40px;
  margin-top: 30px;
`
export const UserInputListContainer = styled.ul`
  margin-top: 30px;
`
export const RightContainer = styled.div`
  background-color: #0f172a;
  height: 80vh;
  width: 40vw;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
`
export const RightHeading = styled.h1`
  color: #ffbf1f;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 50px;
`
export const InputContainer = styled.form`
  display: flex;
`
export const Input = styled.input`
  height: 35px;
  width: 80%;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 15px;
  color: #475569;
  margin-left: 15px;
`
export const AddButton = styled.button`
  height: 35px;
  background-color: #ffc533;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 15px;
  padding: 10px 20px 10px 20px;
  color: #334155;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
`
