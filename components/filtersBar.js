const FiltersBar = ({ setRange, setSorting }) => (
  <>
    <div>
      <label htmlFor="under500">Under 500€</label>
      <input type="radio" name="budget" id="under500" onChange={e => setRange(1)} />
      <br/>
      <label htmlFor="range">500€ - 1500€</label>
      <input type="radio" name="budget" id="range" onChange={e => setRange(2)} />
      <br/>
      <label htmlFor="over1500">Over 1500 €</label>
      <input type="radio" name="budget" id="over1500" onChange={e => setRange(3)} />
    </div>
    <div>
      <label htmlFor="asc">Price: Low to High</label>
      <input type="radio" name="sorting" id="asc" onChange={e => setSorting('ASC')} />
      <br/>
      <label htmlFor="desc">Price: High to Low</label>
      <input type="radio" name="sorting" id="desc" onChange={e => setSorting('DESC')} />
    </div>
  </>
);

export default FiltersBar;
