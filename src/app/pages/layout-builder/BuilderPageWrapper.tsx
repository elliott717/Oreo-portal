import {PageTitle} from '../../../_theme/layout/core'
import {BuilderPage} from './BuilderPage'

function BuilderPageWrapper() {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper
