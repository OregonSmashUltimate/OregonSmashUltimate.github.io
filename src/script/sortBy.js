class SortOption{
  constructor(arg1, arg2, arg3, arg4){
    this.name = arg1;
    this.normalOrder = arg2;
    this.reverseOrder = arg3;
    this.fn = arg4;
  }
}

const sortOptions = [
  new SortOption("", "", "",
    function(a,b){
      return null;
    }),
  new SortOption("Name", "A to Z", "Z to A",
    function(a,b){
      return flip * a.props.name.localeCompare(b.props.name);
    }),
  new SortOption("Venue Fee", "Low to High", "High to Low",
    function(a,b){
      pattern.lastIndex = 0;
      const l = Number(pattern.exec(a.props.venueFee));
      pattern.lastIndex = 0;
      const r = Number(pattern.exec(b.props.venueFee));

      return flip * (l - r);
    }),
  new SortOption("Entry Fee", "Low to High", "High to Low",
    function(a,b){
      pattern.lastIndex = 0;
      const l = Number(pattern.exec(a.props.venueFee));
      pattern.lastIndex = 0;
      const r = Number(pattern.exec(b.props.venueFee));

      return flip * (l - r);
    }),
];
