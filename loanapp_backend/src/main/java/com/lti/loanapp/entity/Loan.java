
package com.lti.loanapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "loans")
public class Loan {

    public enum LoanStatus {
        PENDING,
        APPROVED,
        REJECTED,
        CLOSED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The user (customer) who applied for the loan.
     * Fetch type is LAZY to optimize performance.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "loan_type", nullable = false)
    private String loanType;

    /**
     * BigDecimal is the standard for monetary values.
     * Precision: total digits, Scale: digits after decimal.
     */
    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal amount;

    @Column(nullable = false)
    private int tenure; // Duration in months

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private LoanStatus status;

    /**
     * Optional assignment to a loan officer.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assigned_officer_id")
    private User assignedOfficer;

    /**
     * EMIs linked to this loan.
     * No cascading to avoid accidental data loss.
     */
    @OneToMany(mappedBy = "loan", fetch = FetchType.LAZY)
    private List<EMIPayment> emiPayments;
}
