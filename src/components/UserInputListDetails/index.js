import {UserInputListItem, UserInputText} from './styledComponents'

const UserInputListDetails = props => {
  const {inputDetails} = props
  const {userEnteredText, textLength} = inputDetails

  return (
    <UserInputListItem>
      <UserInputText>
        {userEnteredText} : {textLength}
      </UserInputText>
    </UserInputListItem>
  )
}
export default UserInputListDetails
