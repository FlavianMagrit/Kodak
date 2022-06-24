import React from 'react';
import {BLOGS} from "./blog.service";
import Card from "../../components/Card";

const Subject = ({ subject }) => {

	return (
		<section className='flex wrap'>
			{
				subject === 'beginner'
					? BLOGS.map(blog =>
						<Card title={blog.title} description={blog.description} level={blog.level} key={blog.title}/>
					)
					: <p>Désolé il n'y a pas d'article dans cette catégorie</p>
			}
		</section>
	);
}

export default Subject;