const baseUrl = 'https://localhost:7293/api/Post';

export const getAllPosts = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };



  export const getPost = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
};

  export const addPost = (singlePost) => { 
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singlePost),
    });
  };