import './about.css';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
            alt='Web development'
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>Hi, I'm Mouhsine Nejmi. Nice to meet you.</p>
        <p className='a-desc'>
          I've always been somoene fueled by high energy levels and boundless
          enthusiasm, I’m easily inspired and more then willing to follow my
          fascinations wherever they take me. I’m passionate, expressive,
          multi-talented spirit with a natural ability to entertain and inspire.
          I’m never satisfied to just come up with ideas. Instead I have an
          almost impulsive need to act on them.
        </p>
      </div>
    </div>
  );
};

export default About;
