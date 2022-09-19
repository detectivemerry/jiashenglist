
//to know how many pages to generate

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(jiasheng => {
      return {
        params: { id: jiasheng.id.toString() }
      }
    })

    return {
        paths,
        fallback: false
      }

}

//next will run the function below for each individual item

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: {jiasheng: data }
    }
  }

const Details = ({jiasheng}) => {

    return ( 
        <div>
            <h1>Details page</h1>
            <p>{ jiasheng.email }</p>
            <p>{ jiasheng.website }</p>
            <p>{ jiasheng.address.city }</p>
        </div>
     );
}
 
export default Details;