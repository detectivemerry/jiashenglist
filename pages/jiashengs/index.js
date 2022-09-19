import Link from 'next/link'
import styles from '../../styles/Jiashengs.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { jiashengs: data }
    };
}

//getStaticProps runs before homepage, homepage gets props object

const Homepage = ({ jiashengs }) => {

    return (<div>
        <h1>All Jiashengs</h1>
        {jiashengs && jiashengs.map(jiasheng => (
            <div key={jiasheng.id}>
                <Link href={'/jiashengs/' + jiasheng.id}>
                    <a className={styles.single}>
                        <h3>{jiasheng.name}</h3>
                    </a>
                </Link>
            </div>
        ))}
    </div>);
}

export default Homepage;