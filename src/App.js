import Navigation from './Layout/Navigation/Navigation';
import Section from './Components/Section/Section';
import './styles.css';
import BoxText from './Components/Box/BoxText';


function App() {

  const classNames = require('classnames');

  return (
    <div className="app">
      <Navigation/>
      <Section 
      classes={classNames('section','section--primary')}
      TextforTextarea={BoxText.BoxText.HeadingText[0]}
      headingColor='#ffff'
      slider='true'
      textAreaParagraphClasses={classNames('textArea__paragraph', 'textArea__paragraph--primary')}
      additionalHeadingClass={classNames('textArea__paragraph','textArea__paragraph--secondary')} />
      <Section 
      classes={classNames('section','section--secondary')} 
      TextforTextarea={BoxText.BoxText.HeadingText[0]} 
      headingColor='#2D3236' 
      quantityOfTextAreas = '2'
      boxes='true' 
      additionalHeadingClass={classNames('textArea__paragraph','textArea__paragraph--secondary')} 
      textAreaParagraphClasses={classNames('textArea__paragraph', 'textArea__paragraph--primary')}/>
    </div>
  );
}

export default App;
