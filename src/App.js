import Navigation from './Layout/Navigation/Navigation';
import Section from './Components/Section/Section';
import './styles.scss';

function App() {

  const classNames = require('classnames');
  
  const TextforTextarea1 = {heading:'Heading', paragraph:'Lorem ipsum sit amet, consect etur adipiscing elit.'}
 

  return (
    <div className="app">
      <Navigation/>
      <Section 
      classes={classNames('section','section--primary')}
      TextforTextarea={TextforTextarea1}
      headingColor='white'
      slider='true'
      textAreaParagraphClasses={classNames('textArea__paragraph', 'textArea__paragraph--primary')}/>
      <Section 
      classes={classNames('section','section--secondary')} 
      TextforTextarea={TextforTextarea1} 
      headingColor='grey' 
      quantityOfTextAreas = '2' 
      additionalHeadingClass={classNames('textArea__paragraph','textArea__paragraph--secondary')} 
      textAreaParagraphClasses={classNames('textArea__paragraph', 'textArea__paragraph--primary')}/>
    </div>
  );
}

export default App;
