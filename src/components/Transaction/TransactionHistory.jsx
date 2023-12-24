import { BaseTable, THead, Td, Th, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <Tr key={id}>
            <Td>{index + 1}</Td>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
