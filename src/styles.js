const styles = theme => ({
 
  App: {
    textAlign: 'center',
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent:'center',
    color: 'white',
    backgroundImage: 'linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D)'
  },
  
  auth_form_container: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  login_form: {
    display: 'flex',
    flexDirection: 'column',
  },
  register_form: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  
  label: {
    textAlign: 'left',
    padding: '0.25rem 0'
  },
  
  input: {
    margin: '0.5rem 0',
    padding: '1rem',
    border: 'none',
    borderRadius: '10px'
  },
  
  button: {
    border: 'none',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
    color: '#7439db'
  },
  
  link_btn: {
    background: 'none',
    color: 'white',
    textDecoration: 'underline'
  }
});

export default styles;
