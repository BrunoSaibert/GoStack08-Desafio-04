import React, { Component } from "react";

import PostItem from "./PostItem";

import "./PostList.css";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bruno Saibert",
          avatar: "https://avatars1.githubusercontent.com/u/40339324?s=460&v=4"
        },
        date: "04 Set 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "Fica atento que logo vamos soltar mais informações"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Bruno Saibert",
          avatar: "https://avatars1.githubusercontent.com/u/40339324?s=460&v=4"
        },
        date: "02 Set 2019",
        content:
          "Tenho a seguinte duvida, na segunda aula desse modulo o diego faz um map aninhado como mostra essa imagem abaixo, e eu queria saber se não seria melhor fazer tudo em um map só, pegando o index do model e após inicializar fazer a verificação, não entendi como funciona.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content:
              "Pode ser algo relacionado ao camelcase do model, deixa Meetup. O Sequelize coloca de forma automatica"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
        },
        date: "08 Set 2019",
        content: "Pessoal, alguém ainda tem alguma dúvida?",
        comments: []
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <ul>
        {posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}
