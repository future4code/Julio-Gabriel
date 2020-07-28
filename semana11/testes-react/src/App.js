import React, { useState, useEffect } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [mensagem, setMensagem] = useState(false)

  const renderizaTela = () => {
    if (postsList.length !== 0) {
      return (
        <div>
            <h5 data-testid={"erro"}>Quantidade de posts: {postsList.length}</h5>
            {postsList.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  toggleLike={toggleLike}
                  deletePost={deletePost}
                />
              );
            })}
        </div>
      )
    } else {
      return (
        <div data-testid={"mensagem"}>
          <h1>Não há nenhum post</h1>
        </div>
      )
    }
  }

  const renderizaMensagem = () => {
    if (mensagem) {
      return( 
        <div data-testid={"erro"}>
          <h3>É uma ação proibida, por favor insira um texto para o post!</h3>
        </div>
      )
    }
  }
  
  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    if (inputValue !== "") {
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };
  
      const newPostsList = [newPost, ...postsList];
  
      setPostsList(newPostsList);
      setInputValue("")
      setMensagem(false)
    } else {
      setMensagem(true)
    }   
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {renderizaTela()}
      {renderizaMensagem()}
    </div>
  );
};

export default App;