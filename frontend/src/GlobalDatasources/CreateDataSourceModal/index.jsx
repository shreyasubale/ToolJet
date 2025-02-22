import React, { useContext } from 'react';
import { GlobalDataSourcesContext } from '../index';
import { List } from '../List';

export const CreateDataSourceModal = () => {
  const { handleModalVisibility } = useContext(GlobalDataSourcesContext);

  return (
    <div className="col border-end">
      <div className="p-3">
        <button
          className="add-datasource-btn btn btn-primary active w-100"
          type="button"
          onClick={handleModalVisibility}
        >
          Add new datasource
        </button>
      </div>
      <List />
    </div>
  );
};
