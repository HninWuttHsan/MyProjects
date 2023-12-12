import logo from '../assets/investment-calculator-logo.png';

export default function Header() {

  const colorfulTextStyle = {
    background: 'linear-gradient(to right, #ff8c00, #ff2d55, #4a90e2)', // Add your desired colors here
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block', // Fixes a rendering issue
  };

  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <br></br>
      <h1 style={colorfulTextStyle}>Investment Calculator</h1>
    </header>
  );
}