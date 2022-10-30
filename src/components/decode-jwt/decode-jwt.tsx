import { useState } from 'react';
import { validToken, decodeJwt } from '@/lib';
import './style.css';

const DecodeJwt: React.FC = () => {
    const [jwt, setJwt] = useState<string>(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0ZSBKd3QgdGVzdGVyIiwiaWF0IjoxNjY3MTY2Nzk4LCJleHAiOjE5MTk2Mjc1OTgsImF1ZCI6Imh0dHBzOi8vZ2l0aHViLmNvbS9EcmV0ZTQ1Ny93ZWItYmFzaWMtZnVuY3Rpb25zIiwic3ViIjoianJvY2tldEB3ZWItYmFzaWMtZnVuY3Rpb25zLmNvbSIsIkZpcnN0TmFtZSI6IkRyZXRlIiwiU3VyTmFtZSI6IjQ1NyIsIkVtYWlsIjoianJvY2tldEB3ZWItYmFzaWMtZnVuY3Rpb25zLmNvbSIsIlJvbGUiOlsiTm90aGluZ0NFTyIsIkp1bmlvck5vb2IiXX0.s0rd827EApXozo2eWJ4foeERu5xIThTFnv-VDAWZHh0',
    );
    const [decodedJwt, setDecodedJwt] = useState<string>('');

    const handleJwtChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (typeof event.target.value === 'string') setJwt(event.target.value);
    };

    const handleJwtDecode = () => {
        const isValid = validToken(jwt);
        if (isValid) {
            const decodedJwtResult = decodeJwt(jwt);
            setDecodedJwt(JSON.stringify(decodedJwtResult, null, 2));
        }
    };

    return (
        <div>
            <h2>Valid and Decode JWT</h2>
            <textarea
                className="textArea"
                rows={20}
                cols={25}
                value={jwt}
                onChange={handleJwtChange}
            />
            <button type="button" onClick={handleJwtDecode} disabled={!jwt}>
                Decode
            </button>
            <pre>{decodedJwt}</pre>
        </div>
    );
};

export default DecodeJwt;
