import React from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';
import AccountBook from './AccountBook';
import Tabs from './Tabs';
import accountAction from '../actions/accountAction';
import tabAction from '../actions/tabAction';

const mapStateToProps = state => ({
  accountList: state.account.accountList,
  focused: state.tabs.focused
});
const mapDispatchToProps = dispatch => ({
  save: money => dispatch(accountAction.save(money)),
  withdraw: money => dispatch(accountAction.withdraw(money)),
  changeTab: index => dispatch(tabAction.changeTab(index))
});

class App extends React.Component {
  render() {
    const {
      accountList,
      save,
      withdraw,
      focused,
      changeTab
    } = this.props;
    return (
      <div>
        <Tabs focused={focused} changeTab={changeTab} />
        <InputBox
          save={save}
          withdraw={withdraw}
        />
        <AccountBook accountList={accountList}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
