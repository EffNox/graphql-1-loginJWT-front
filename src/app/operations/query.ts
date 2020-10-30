import gql from 'graphql-tag';

const meDt = gql`
query{
me {
    id
    nom
    ape
    cor
  }
}
`;

const getUsers = gql`
query{
  users {
   id
   nom
   ape
   createdAt
 }
}
`;

const login = gql`
  query($cor:String!,$pwd:String!){
    login(cor:$cor,pwd:$pwd){
     tk
    }
  }
`;

export {
    meDt,
    getUsers,
    login,
}
