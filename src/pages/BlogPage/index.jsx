import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import PictureBackground from '../../assets/background.jpeg';
import { Background } from '../../components/Background';
import { Link, Switch } from 'react-router-dom';
import Subject from './Subject';

const BlogPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <section>
      <Background image={PictureBackground} title="Blog" pointColor="red-point" />

      <div className="flex column mlr-20">
        <ul className="flex w100 mt-2">
          <li className="ml-1 mr-1">
            <Link to={`${url}/beginner`}>Débutant</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={`${url}/confirmed`}>Confirmé</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={`${url}/photo`}>Photographie</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={`${url}/repackaged`}>Reconditionné</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={`${url}/advices`}>Conseils</Link>
          </li>
          <li className="ml-1 mr-1">
            <Link to={`${url}/all`}>Tout voir</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <Subject subject={'beginner'} />
          </Route>
          <Route path={`${path}/beginner`}>
            <Subject subject={'beginner'} />
          </Route>
          <Route path={`${path}/:toto`}>
            <Subject subject={'toto'} />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default BlogPage;
