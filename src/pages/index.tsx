import React, { FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import DocumentScanner from './DocumentScanner';
import SignStamp from './SignStamp';
import BatchScanning from './BatchScanning';
import AdvancedFilters from './AdvancedFilters';
import ExportShare from './ExportShare';

// useLocation is not typed correctly, so we need to cast it to the correct type
const typedUseLocation = useLocation as unknown as () => { pathname: string };

const PagesContainer: FC = () => {
  const location = typedUseLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<DocumentScanner />} />
        <Route path="/signstamp" element={<SignStamp />} />
        <Route path="/batchscan" element={<BatchScanning />} />
        <Route path="/advancedfilters" element={<AdvancedFilters />} />
        <Route path="/exportshare" element={<ExportShare />} />
      </Routes>
    </AnimatePresence>
  );
};

export default PagesContainer;
