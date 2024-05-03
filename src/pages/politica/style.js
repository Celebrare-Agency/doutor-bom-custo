import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  max-width: 90rem;
  min-height: 35rem;
  margin: auto;
  width: 90%;
  height: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    color: var(--blue);
}

section {
    margin-bottom: 20px;
}

article {
    margin-bottom: 20px;
}

h2 {
    color: var(--blue);
}

p {
    color: #666;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    margin-top: 20px;
}

address {
    color: #777;
}

/* Responsividade */
@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
}
`;