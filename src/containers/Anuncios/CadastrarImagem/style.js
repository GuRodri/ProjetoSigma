import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(120deg, #181A2A 0%, #2C2E4A 60%, #1B1F2F 100%);
  color: #e0e0e0;
  padding: 3em 1em;
`;

export const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(44,46,74,0.98);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(44,46,74,0.18), 0 1.5px 8px rgba(0,0,0,0.10);
  padding: 2.5em 2em 2em 2em;
  max-width: 420px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #c2e9fb;
  margin-bottom: 1.2em;
  letter-spacing: 1px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7em 1em;
  margin-bottom: 1.2em;
  border-radius: 1.2em;
  border: 1.5px solid #7fd8f7;
  background: #23243a;
  color: #e0e0e0;
  font-size: 1rem;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(44,46,74,0.10);

  &:focus {
    border-color: #c2e9fb;
    box-shadow: 0 0 0 2px #7fd8f733;
  }
`;

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5em;
  width: 100%;
`;

export const CustomFileInputButton = styled.button`
  background: linear-gradient(90deg, #3BA4D1 0%, #25D62C 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6em 1.2em;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(59,164,209,0.15);
  cursor: pointer;
  margin-right: 1em;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(90deg, #25D62C 0%, #3BA4D1 100%);
    box-shadow: 0 4px 16px rgba(59,164,209,0.25);
    transform: translateY(-2px) scale(1.04);
  }
`;

export const FileInput = styled.input``;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(44,46,74,0.18);
  background: #e0e3ea;
  margin-right: 1em;
`;

export const RemoveButton = styled.button`
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-left: 0.5em;
  box-shadow: 0 2px 8px rgba(255,77,79,0.10);
  transition: background 0.2s;

  &:hover {
    background: #d90429;
  }
`;

export const UploadButton = styled.button`
  background: linear-gradient(90deg, #3BA4D1 0%, #25D62C 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.08rem;
  padding: 0.8em 2em;
  border-radius: 14px;
  border: none;
  box-shadow: 0 2px 8px rgba(59,164,209,0.15);
  cursor: pointer;
  margin-top: 1.2em;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;

  &:hover {
    background: linear-gradient(90deg, #25D62C 0%, #3BA4D1 100%);
    box-shadow: 0 4px 16px rgba(59,164,209,0.25);
    transform: translateY(-2px) scale(1.04);
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 10px;
  background: #ccc;
  border-radius: 5px;
  margin-top: 0.5em;
`;

export const ImageLink = styled.a`
  color: #3BA4D1;
  text-decoration: underline;
  font-size: 0.98rem;
  margin-top: 0.5em;
`;

export const SuccessMessage = styled.div`
  color: #25D62C;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1em;
  text-align: center;
`;
