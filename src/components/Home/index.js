import {Component} from 'react'
import {v4} from 'uuid'

import UserInputListDetails from '../UserInputListDetails'

import {
  BgContainer,
  AppContainer,
  LeftContainer,
  LeftHeadingContainer,
  HeadingText,
  UserInputListContainer,
  LeftEmptyImage,
  RightContainer,
  RightHeading,
  InputContainer,
  Input,
  AddButton,
} from './styledComponents'

class Home extends Component {
  state = {userInput: '', userInputList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddInputToList = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prev => ({
      userInputList: [...prev.userInputList, newInput],
      userInput: '',
    }))
  }

  renderUserInputList = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <LeftEmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(each => (
        <UserInputListDetails key={each.id} inputDetails={each} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <BgContainer>
        <AppContainer>
          <LeftContainer>
            <LeftHeadingContainer>
              <HeadingText>
                Count the characters like a <br />
                Boss...
              </HeadingText>
            </LeftHeadingContainer>
            <UserInputListContainer>
              {this.renderUserInputList()}
            </UserInputListContainer>
          </LeftContainer>
          <RightContainer>
            <RightHeading>Character Counter</RightHeading>
            <InputContainer onSubmit={this.onAddInputToList}>
              <Input
                value={userInput}
                type="text"
                onChange={this.onChangeUserInput}
                placeholder="Enter the Characters Here"
              />
              <AddButton>Add</AddButton>
            </InputContainer>
          </RightContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}
export default Home
