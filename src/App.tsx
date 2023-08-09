import { Header } from './componentes/Header';
import { Post } from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';

import  styles  from './App.module.css';

import './global.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/90807108?v=4",
      name: "Maria Luiza",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'github.com/marialuizalacerda'}
    
    ],
    publishedAt: new Date('2023-07-03 21:19:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/6643122?v=4",
      name: "Mayk Brito",
      role: "Educador @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'github.com/marialuizalacerda'}
    
    ],
    publishedAt: new Date('2023-07-04 20:00:00'),
  },
];

// iteração (criar uma estrutura de repetição)

export function App() {
  
  return (
    <div>
    <Header />
   
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
       {posts.map(post => {
        return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
       )
       })}
      </main>
    </div>
    </div>
   
  )
}


