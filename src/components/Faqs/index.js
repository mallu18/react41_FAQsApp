// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list scroll-container">
            {faqsList.map(faq => (
              <FaqItem key={faq.id} faqDetails={faq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
