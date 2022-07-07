import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputPasswordRef = useRef<HTMLInputElement>(null); // Guarda referência de elemento HTML.

    const emailLength = useMemo( () => {
        return email.length * 1000;
    }, [email.length]); // useMemo guarda operações na memória, para que ela não seja executada a cada vez que a página é renderizada.

    useEffect( () => {
        console.log(password);
    }, []); // Quando o array está vazio, a função é executado apenas uma vez, ao iniciar a aplicação.

    useEffect( () => {
        console.log(email);
    }, [email]); // Quando existe uma dependência de arrays, a função é executada toda vez que há uma alteração nos valores.

    useEffect( () => {
        console.log(password);
    }, [password]);

    const handleEntrar = useCallback(() => {
          console.log(email)
          console.log(password)
    }, [email, password]); // É semelhante aos metodos acima. 

    return(
        <div>
            <p>Quantidade de caracteres: {emailLength} </p>
           <form action="">

            <label htmlFor="E-mail">
                Email
                <input 
                type="email" 
                value={email} 
                onChange = {e => setEmail(e.target.value)}
                onKeyDown = {e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
                />
            </label>

            <label htmlFor="Senha">
                Senha
                <input 
                type="password" 
                value={password} 
                ref={inputPasswordRef}
                onChange = {e => setPassword(e.target.value)}
                />
            </label>

            <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}