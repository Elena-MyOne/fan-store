import React, { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/store';

const Account: React.FC = () => {
  const { name, email } = useSelector(selectUser);

  const [editName, setEditName] = React.useState(false);
  const [editEmail, setEditEmail] = React.useState(false);

  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, [editName, editEmail]);

  const listItemStyles = 'border rounded p-4 flex justify-between items-center';
  const itemSpanStyles = 'text-orange-400 font-semibold min-w-[90px] inline-block';
  const svgIconStyles = 'hover:text-orange-500 duration-300 cursor-pointer';
  const buttonsStyle =
    'flex items-center gap-1 px-4 py-1 hover:text-white bg-gray-200 hover:bg-orange-500 duration-300 rounded';
  const inputStyles =
    'border rounded px-2 py-1 w-full outline-none focus:border-orange-300 duration-300 hover:border-orange-400';

  const closeAccountForm = () => {
    setEditName(false);
    setEditEmail(false);
  };

  const handleFormClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const handelNameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO /users -> PATCH
  };

  const handelEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO /users -> PATCH
  };

  return (
    <div className="account">
      <h2 className="subtitle font-semibold text-center mb-8">Account information</h2>
      <div className="account-body">
        <ul className="account-info grow flex flex-col gap-4 flex-wrap">
          <li className={listItemStyles}>
            <span className={itemSpanStyles}>Name: </span>
            <span>{name}</span>
            <button className={svgIconStyles} onClick={() => setEditName((prev) => !prev)}>
              <svg className="w-[20px] h-[20px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="m400.693-100.001-18.077-120.231q-20.538-7-44.231-20.346-23.692-13.346-40.846-28.27l-111.846 50.923-79.922-141.306 101.077-74.384q-2-10.539-2.885-23-.885-12.462-.885-23 0-10.154.885-22.616t2.885-24.154l-101.077-74.769 79.922-140.152 111.461 50.154q18.308-14.924 41.231-28.078 22.924-13.154 43.847-19.538l18.461-121.231h158.614l18.077 120.615q22.077 8.154 44.154 20.231 22.077 12.077 39.769 28.001l113.384-50.154 79.538 140.152-102.615 74.308q2.769 11.923 3.462 24 .692 12.077.692 22.846 0 10.385-.885 22.154-.884 11.769-3.269 24.462l102.23 74.153-79.922 141.306-112.615-51.307q-18.692 15.692-40.346 28.962-21.654 13.269-43.577 19.654l-18.077 120.615H400.693Zm78.153-267.308q47.076 0 79.884-32.807 32.807-32.808 32.807-79.884t-32.807-79.884q-32.808-32.807-79.884-32.807-46.692 0-79.691 32.807-33 32.808-33 79.884t33 79.884q32.999 32.807 79.691 32.807Zm0-45.384q-27.846 0-47.577-19.73-19.73-19.731-19.73-47.577 0-27.846 19.73-47.577 19.731-19.73 47.577-19.73 28.231 0 47.769 19.73 19.539 19.731 19.539 47.577 0 27.846-19.539 47.577-19.538 19.73-47.769 19.73ZM480-480Zm-42.846 334.615h85.307L536.846-257q31.846-8 59.423-23.846 27.577-15.847 52.731-40.231l104.461 45.231 40-70.847L701-414.923q4-17.77 6.307-33.5 2.308-15.731 2.308-31.577 0-16.615-2-31.961T701-544.307l93.23-69-40-70.847-105.615 45.231q-21.077-23.692-50.846-41.769Q568-698.769 536.461-703l-13.615-111.615h-85.692l-13.231 111.231q-33.23 6.615-61.192 22.653-27.961 16.039-52.115 41.424L205.77-684.154l-40 70.847 92.461 67.846q-4.385 15.846-6.692 32.153-2.308 16.308-2.308 33.693 0 16.615 2.308 32.538 2.307 15.923 6.307 32.154l-92.076 68.23 40 70.847 104.461-44.847q24 24.385 52.154 40.231 28.154 15.846 61.154 23.846l13.615 111.231Z"
                />
              </svg>
            </button>
          </li>
          <li className={listItemStyles}>
            <span className={itemSpanStyles}>Email: </span>
            <div>{email}</div>
            <button className={svgIconStyles} onClick={() => setEditEmail((prev) => !prev)}>
              <svg className="w-[20px] h-[20px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="m400.693-100.001-18.077-120.231q-20.538-7-44.231-20.346-23.692-13.346-40.846-28.27l-111.846 50.923-79.922-141.306 101.077-74.384q-2-10.539-2.885-23-.885-12.462-.885-23 0-10.154.885-22.616t2.885-24.154l-101.077-74.769 79.922-140.152 111.461 50.154q18.308-14.924 41.231-28.078 22.924-13.154 43.847-19.538l18.461-121.231h158.614l18.077 120.615q22.077 8.154 44.154 20.231 22.077 12.077 39.769 28.001l113.384-50.154 79.538 140.152-102.615 74.308q2.769 11.923 3.462 24 .692 12.077.692 22.846 0 10.385-.885 22.154-.884 11.769-3.269 24.462l102.23 74.153-79.922 141.306-112.615-51.307q-18.692 15.692-40.346 28.962-21.654 13.269-43.577 19.654l-18.077 120.615H400.693Zm78.153-267.308q47.076 0 79.884-32.807 32.807-32.808 32.807-79.884t-32.807-79.884q-32.808-32.807-79.884-32.807-46.692 0-79.691 32.807-33 32.808-33 79.884t33 79.884q32.999 32.807 79.691 32.807Zm0-45.384q-27.846 0-47.577-19.73-19.73-19.731-19.73-47.577 0-27.846 19.73-47.577 19.731-19.73 47.577-19.73 28.231 0 47.769 19.73 19.539 19.731 19.539 47.577 0 27.846-19.539 47.577-19.538 19.73-47.769 19.73ZM480-480Zm-42.846 334.615h85.307L536.846-257q31.846-8 59.423-23.846 27.577-15.847 52.731-40.231l104.461 45.231 40-70.847L701-414.923q4-17.77 6.307-33.5 2.308-15.731 2.308-31.577 0-16.615-2-31.961T701-544.307l93.23-69-40-70.847-105.615 45.231q-21.077-23.692-50.846-41.769Q568-698.769 536.461-703l-13.615-111.615h-85.692l-13.231 111.231q-33.23 6.615-61.192 22.653-27.961 16.039-52.115 41.424L205.77-684.154l-40 70.847 92.461 67.846q-4.385 15.846-6.692 32.153-2.308 16.308-2.308 33.693 0 16.615 2.308 32.538 2.307 15.923 6.307 32.154l-92.076 68.23 40 70.847 104.461-44.847q24 24.385 52.154 40.231 28.154 15.846 61.154 23.846l13.615 111.231Z"
                />
              </svg>
            </button>
          </li>
        </ul>

        {(editName || editEmail) && (
          <div
            className="form fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full flex flex-col justify-center items-center"
            onClick={closeAccountForm}
          >
            <div
              className="form-body bg-white border rounded p-4 min-w-[310px]"
              onClick={handleFormClick}
            >
              <div className="close-button flex justify-end mb-4">
                <button className={`${svgIconStyles}`} onClick={closeAccountForm}>
                  <svg className="w-[20px] h-[20px]" viewBox="0 -960 960 960">
                    <path
                      className="fill-current"
                      d="m250.923-218.924-31.999-31.999L448.001-480 218.924-709.077l31.999-31.999L480-511.999l229.077-229.077 31.999 31.999L511.999-480l229.077 229.077-31.999 31.999L480-448.001 250.923-218.924Z"
                    />
                  </svg>
                </button>
              </div>
              {editName && (
                <form
                  className="edit-name flex justify-center items-center gap-1"
                  onClick={handelNameSubmit}
                >
                  <label className="inline-block">
                    <input
                      type="text"
                      className={inputStyles}
                      ref={nameRef}
                      placeholder="Edit Name"
                    />
                  </label>
                  <button className={buttonsStyle}>Save</button>
                </form>
              )}
              {editEmail && (
                <form
                  className="edit-name flex justify-center items-center gap-1"
                  onClick={handelEmailSubmit}
                >
                  <label>
                    <input
                      type="text"
                      className={inputStyles}
                      ref={emailRef}
                      placeholder="Edit Email"
                    />
                  </label>
                  <button className={buttonsStyle}>Save</button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;