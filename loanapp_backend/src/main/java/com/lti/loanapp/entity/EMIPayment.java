package com.lti.loanapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "emi_payment")
public class EMIPayment {

    public enum EMIStatus {
        PENDING,
        PAID,
        LATE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The loan associated with this EMI.
     * Many EMIs belong to one loan.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    @Column(name = "due_date", nullable = false)
    private LocalDate dueDate;

    @Column(name = "paid_date")
    private LocalDate paidDate; // Nullable until paid

    @Column(name = "emi_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal emiAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "emi_status", nullable = false)
    private EMIStatus emiStatus;

    /**
     * One-to-one relationship with Penalty.
     * If an EMI is deleted, its penalty is also removed.
     */
    @OneToOne(mappedBy = "emiPayment", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Penalty penalty;
}
