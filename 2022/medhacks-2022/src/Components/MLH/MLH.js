function MLH() {
  const logoStyle = {
    display: 'block',
    maxWidth: '80px',
    minWidth: '60px',
    position: 'fixed',
    left: '8%',
    top: '0',
    width: '10%',
    zIndex: '10000',
  }

  return (
    <div style={logoStyle}>
      <a id="mlh-trust-badge" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" className="w-[100%]"/>

        </a>
    </div>
  )
}

export default MLH