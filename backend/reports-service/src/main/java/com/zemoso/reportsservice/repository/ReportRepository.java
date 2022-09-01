package com.zemoso.reportsservice.repository;

import com.zemoso.reportsservice.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report,Integer> {
    @Query(value = "SELECT * from reports r WHERE r.users_id=?1", nativeQuery = true)
    List<Report> getReportsByUserId(String userId);
}
