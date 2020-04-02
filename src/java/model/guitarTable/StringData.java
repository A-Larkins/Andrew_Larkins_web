/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.guitarTable;

import dbUtils.FormatUtils;
import java.sql.ResultSet;


/* The purpose of this class is just to "bundle together" all the 
 * character data that the user might type in when they want to 
 * add a new Customer or edit an existing customer.  This String
 * data is "pre-validated" data, meaning they might have typed 
 * in a character string where a number was expected.
 * 
 * There are no getter or setter methods since we are not trying to
 * protect this data in any way.  We want to let the JSP page have
 * free access to put data in or take it out. */
public class StringData {

    public String guitar_id = "";
    public String guitar_make = "";
    public String guitar_model = "";
    public String guitar_image = "";
    public String guitar_price = "";
    public String guitar_manufacture_date = ""; 

    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringData() {
    }

    // overloaded constructor sets all data members by extracting from resultSet.
    public StringData(ResultSet results) {
        try {
            this.guitar_id = FormatUtils.formatInteger(results.getObject("guitar_id"));
            this.guitar_make = FormatUtils.formatString(results.getObject("guitar_make"));
            this.guitar_model = FormatUtils.formatString(results.getObject("guitar_model"));
            this.guitar_image = FormatUtils.formatString(results.getObject("guitar_image"));
            this.guitar_price = FormatUtils.formatDollar(results.getObject("guitar_price"));
            this.guitar_manufacture_date = FormatUtils.formatDate(results.getObject("guitar_manufacture_date"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.guitarTable.StringData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }

    public int getCharacterCount() {
        String s = this.guitar_id + this.guitar_make + this.guitar_model + this.guitar_image
                + this.guitar_price + this.guitar_manufacture_date;
        return s.length();
    }

    public String toString() {
        return "Guitar Id:" + this.guitar_id
                + ", Guitar Make: " + this.guitar_make
                + ", Guitar Model: " + this.guitar_model
                + ", Guitar Image: " + this.guitar_image
                + ", Guitar Price: " + this.guitar_price
                + ", Guitar Manufacture Date: " + this.guitar_manufacture_date;
    }
}
