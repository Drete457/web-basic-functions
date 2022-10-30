import { useState } from 'react';
import { validToken, decodeJwt } from '@/lib';
import './style.css';

const DecodeJwt: React.FC = () => {
    const [jwt, setJwt] = useState<string>(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0ZSBKd3QgdGVzdGVyIiwiaWF0IjoxNjY3MTY2Nzk4LCJleHAiOjE5MTk2Mjc1OTgsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkiLCJTdXJuYW1lIjoiUm9ja2V0IiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.Nx2lIUeahck22yzIohG5iC9TZwr0HTGTnR7snGfVBSY',
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
            <h2>Decode JWT</h2>
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
