
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoriesHeaderIndex } from '../redux/cats/slice';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';

const Categories: React.FC = (): JSX.Element => {
  const categoriesHeaderIndex: number = useSelector((state: RootState) => state.cats.categoriesHeaderIndex);
  const dispatch = useDispatch();

  const categoriesMenu = [
    { name: <Link className='headerBtn' to="/">Все котики</Link> },
    { name: <Link className='headerBtn' to="/favorites">Любимые котики</Link> },
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesMenu.map((obj, i: number) => (
          <li
            className={categoriesHeaderIndex === i ? 'active' : ''}
            key={i}
            onClick={() => dispatch(setCategoriesHeaderIndex(i))}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;