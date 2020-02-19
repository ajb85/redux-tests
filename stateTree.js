export default {
  myData: {
    location: state => state.app.myData,
    getter: () => ['test data', 'this is just test data', 'please ignore']
  }
};
