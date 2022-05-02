package com.example.raj.hrms_backend.model;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToOne;

@Entity
public class Salary {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String firstName;
	private String lastName;
	private String month;
	private int totalPaidDays;
	private int basic;
	private int hra;
	private int dearnessAllowance;
	private int travelAllowance;
	private int pf;
	private int totalTax;
	private int totalReimbursement;
	private int totalDeduction;
	private int totalPaid;
	
	
	
	
//	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "salary")
//	private Employee employee;
	
	public Salary(String firstName, String lastName, String month, int totalPaidDays, int basic, int hra,
			int dearnessAllowance, int travelAllowance, int pf, int totalTax, int totalReimbursement,
			int totalDeduction, int totalPaid) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.month = month;
		this.totalPaidDays = totalPaidDays;
		this.basic = basic;
		this.hra = hra;
		this.dearnessAllowance = dearnessAllowance;
		this.travelAllowance = travelAllowance;
		this.pf = pf;
		this.totalTax = totalTax;
		this.totalReimbursement = totalReimbursement;
		this.totalDeduction = totalDeduction;
		this.totalPaid = totalPaid;
	}
	public Salary() {
		super();
		
	}
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public int getTotalPaidDays() {
		return totalPaidDays;
	}
	public void setTotalPaidDays(int totalPaidDays) {
		this.totalPaidDays = totalPaidDays;
	}
	public int getBasic() {
		return basic;
	}
	public void setBasic(int basic) {
		this.basic = basic;
	}
	public int getHra() {
		return hra;
	}
	public void setHra(int hra) {
		this.hra = hra;
	}
	public int getDearnessAllowance() {
		return dearnessAllowance;
	}
	public void setDearnessAllowance(int dearnessAllowance) {
		this.dearnessAllowance = dearnessAllowance;
	}
	public int getTravelAllowance() {
		return travelAllowance;
	}
	public void setTravelAllowance(int travelAllowance) {
		this.travelAllowance = travelAllowance;
	}
	public int getPf() {
		return pf;
	}
	public void setPf(int pf) {
		this.pf = pf;
	}
	public int getTotalTax() {
		return totalTax;
	}
	public void setTotalTax(int totalTax) {
		this.totalTax = totalTax;
	}
	public int getTotalReimbursement() {
		return totalReimbursement;
	}
	public void setTotalReimbursement(int totalReimbursement) {
		this.totalReimbursement = totalReimbursement;
	}
	public int getTotalDeduction() {
		return totalDeduction=pf+totalTax;
	}
	public void setTotalDeduction(int totalDeduction) {
		this.totalDeduction = totalDeduction;
	}
	public int getTotalPaid() {
		return totalPaid=basic+hra+dearnessAllowance+travelAllowance+totalReimbursement;
	}
	public void setTotalPaid(int totalPaid) {
		this.totalPaid = totalPaid;
	}

//	public Employee getEmployee() {
//		return employee;
//	}
//	
//	public void setEmployee(Employee employee) {
//		this.employee = employee;
//	}
	
}
