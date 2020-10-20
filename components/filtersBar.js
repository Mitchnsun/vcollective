import { Radio } from 'antd';

const RANGE_OPTIONS = [
  { label: 'Under 500€', value: 1},
  { label: '500€ - 1500€', value: 2},
  { label: 'Over 1500 €', value: 3},
];

const SORT_OPTIONS = [
  { label: 'Price: Low to High', value: 'ASC'},
  { label: 'Price: High to Low', value: 'DESC'},
];

const FiltersBar = ({ setRange, setSorting }) => {
  const onChangeRange = (e) => setRange(e.target.value);
  const onChangeSort = (e) => setSorting(e.target.value);
  return (
  <div style={{ padding: '25px 50px' }}>
    <h2>Filter by</h2>
    {setRange ? (
      <Radio.Group
        options={RANGE_OPTIONS}
        onChange={onChangeRange}
        optionType="button"
      />
    ): null}
    {setSorting ? (
      <Radio.Group
        options={SORT_OPTIONS}
        onChange={onChangeSort}
        optionType="button"
      />
    ): null}
  </div>
)};

export default FiltersBar;
