import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, DSG!</h1>
        <p>Database was created using:</p>
            <code>
                
                CREATE TABLE tblEmployee (      
                EmployeeID int IDENTITY(1,1) NOT NULL PRIMARY KEY,      
                Name varchar(20) NOT NULL ,      
                City varchar(20) NOT NULL ,      
                Department varchar(20) NOT NULL ,      
                Gender varchar(6) NOT NULL       
                )      
                GO   
                </code>
            <br /><br />
            <code>
                CREATE TABLE tblCities (      
            CityID int IDENTITY(1,1) NOT NULL PRIMARY KEY,      
            CityName varchar(20) NOT NULL       
            )      
            GO
                </code>
            <br /><br />
            <code>
                INSERT INTO tblCities VALUES('Pittsburgh');      
                INSERT INTO tblCities VALUES('New York');      
                INSERT INTO tblCities VALUES('Atlanta');      
                INSERT INTO tblCities VALUES('San Jose');      
                INSERT INTO tblCities VALUES('Cleveland')
                </code>
             </div>
    );
  }
}
