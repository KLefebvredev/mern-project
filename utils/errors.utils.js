module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', email:'', password:''};

    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (err.message.includes('email'))
        errors.email = "Email incorrect ou déjà pris";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caractères minimum";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = 'Ce pseudo est déjà utilisé';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = 'Cet email est déjà enregistré';
    

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''};

    if (err.message.includes("email"))
        errors.email = "L'email ou le mot de passe est incorrect";

    if (err.message.includes("password"))
        errors.password = "L'email ou le mot de passe est incorrect";

    return errors
};

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: ''};
  
    if (err.message.includes('invalid file'))
      errors.format = "Format incompatabile";
  
    if (err.message.includes('maxSize'))
      errors.maxSize = "Le fichier dépasse 500ko";

    return errors
}