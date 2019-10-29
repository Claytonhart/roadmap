import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

const AlertContainer = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
`;

const AlertMessage = styled.div`
  background-color: ${props => props.theme.primary[props.backgroundColor]};
  color: #fff;
  padding: 16px 8px;
  margin-bottom: 10px;
  width: 340px;
  text-align: center;
`;

const Alert = ({ alerts }) => {
  const alertsArray =
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <AlertMessage key={alert.id} backgroundColor={alert.alertType}>
        {alert.msg}
      </AlertMessage>
    ));

  return <AlertContainer>{alertsArray}</AlertContainer>;
};
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
