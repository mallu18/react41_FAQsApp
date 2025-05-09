// Write your code here.
import './index.css'
import {useState} from 'react'

const FaqItem = ({faqDetails}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState)
  }

  const {questionText, answerText} = faqDetails

  const iconUrl = isOpen
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isOpen ? 'minus' : 'plus'

  return (
    <li className="faq-item">
      <div className="faq-container-question">
        <h1 className="question">{questionText}</h1>
        <button className="toggle-button" onClick={toggleAnswer} type="button">
          <img src={iconUrl} alt={altText} />
        </button>
      </div>

      {isOpen && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
