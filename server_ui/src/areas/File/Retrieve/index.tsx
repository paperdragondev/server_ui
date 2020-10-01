import React, { useEffect, useState } from 'react';
import { getFileNames } from '../../../proxies/File';
import { GetFileNamesDTO } from '../../../types';
import FileTable from './FileTable';
import { MenuItem, Select, Grid } from '@material-ui/core';

type FileNames = Array<GetFileNamesDTO>;

const users = [
  { name: 'Anthony', value: 'anthony' },
  { name: 'Lauren', value: 'lauren' },
];

function Retrieve() {
  const [fileNames, setFileNames] = useState<FileNames>([]);
  const [user, setUser] = useState<String>('default');

  useEffect(() => {
    const fetchedUser = localStorage.getItem('user');

    if (fetchedUser !== null) {
      setUser(fetchedUser);
    }

    return () => {
      setUser('default');
    };
  }, []);

  useEffect(() => {
    if (user === 'default') return;

    async function fetchData() {
      await getFileNames(user)
        .then((res) => setFileNames(res.data))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, [user]);

  const handleUserChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUser(event.target.value as string);
    localStorage.setItem('user', event.target.value as string);
  };

  return (
    <Grid container direction="column">
      <Grid item style={{ margin: 'auto', paddingTop: 15 }}>
        {user === 'default' && (
          <>
            <h3>Select User</h3>
            <Select
              labelId="Select-user"
              id="user"
              value={user}
              onChange={handleUserChange}
              style={{ width: 100 }}
            >
              {users.map((user) => {
                return <MenuItem value={user.value}>{user.name}</MenuItem>;
              })}
            </Select>
          </>
        )}
      </Grid>
      <Grid item style={{ width: '100%' }}>
        {user !== 'default' && <FileTable files={fileNames} />}
      </Grid>
    </Grid>
  );
}

export default Retrieve;
