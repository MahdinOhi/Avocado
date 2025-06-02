import React, { useMemo } from 'react';
import Card from './Card';
import VaultItem from './VaultItem';

const RecentVaults = React.memo(() => {
  const vaultItems = useMemo(
    () => [
      {
        name: 'Vault name',
        description: 'Vault description',
        date: 'Multiple Actions, Multiple Windows, Added Menu, Opened Today',
      },
      {
        name: 'Vault name',
        description: 'Vault description',
        date: 'Multiple Actions, Multiple Windows, Added Menu, Opened Today',
      },
      {
        name: 'Vault name',
        description: 'Vault description',
        date: 'Multiple Actions, Multiple Windows, Added Menu, Opened Today',
      },
    ],
    []
  );

  return (
    <Card className='lg:col-span-5 lg:row-span-1'>
      <h2 className='font-bold text-lg mb-4 text-gray-800'>Recent Vaults</h2>
      <div className='space-y-2 max-h-48 lg:max-h-none overflow-y-auto'>
        {vaultItems.map((item, index) => (
          <VaultItem key={index} {...item} />
        ))}
      </div>
    </Card>
  );
});

export default RecentVaults;
