import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export interface PdfDocumentMeta {
  title: string
  subtitle?: string
  sanskritTitle?: string
  authorOrAttribution?: string
  chamberLabel?: string
  generatedAt?: string
  verificationSealText?: string
  provenanceSource?: string
}

export interface StructuredArticlePdfData {
  title: string
  sanskritTitle?: string
  category: string
  statusOrPeriod?: string
  attribution?: string
  summary: string
  details?: string
  sourceNotes?: string
  provenance?: string
  citations?: string[]
  keyPoints?: { label: string; text: string }[]
  imageUrl?: string
  imageCaption?: string
}

/**
 * Clean multi-page element snapshot to PDF
 */
export async function downloadElementAsPdf(
  elementId: string,
  filename: string,
  meta: PdfDocumentMeta
): Promise<boolean> {
  const targetElement = document.getElementById(elementId)
  if (!targetElement) {
    console.error(`Target element #${elementId} not found for PDF generation`)
    return false
  }

  try {
    const canvas = await html2canvas(targetElement, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#070512',
      logging: false,
      windowWidth: targetElement.scrollWidth,
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.95)

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    const marginX = 12
    const topMargin = 26
    const bottomMargin = 18
    const contentWidth = pageWidth - marginX * 2
    const maxContentHeight = pageHeight - topMargin - bottomMargin

    const imgWidth = contentWidth
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = topMargin
    let pageNumber = 1

    const drawHeaderAndFooter = (curPage: number, totalPagesEstimate: number) => {
      pdf.setFillColor(12, 9, 28)
      pdf.rect(0, 0, pageWidth, 22, 'F')
      pdf.setDrawColor(212, 175, 55)
      pdf.setLineWidth(0.4)
      pdf.line(marginX, 22, pageWidth - marginX, 22)

      pdf.setTextColor(232, 197, 107)
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(10)
      pdf.text('AUM SANATANA KNOWLEDGE SYSTEMS · ॐ', marginX, 10)

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8)
      pdf.setTextColor(180, 180, 200)
      const chamber = meta.chamberLabel || 'Source-Authenticated Archival Knowledge'
      pdf.text(chamber, marginX, 16)

      pdf.setFontSize(7.5)
      pdf.setTextColor(160, 160, 170)
      pdf.text('OFFLINE STUDY EDITION · PEER AUDITED', pageWidth - marginX, 10, { align: 'right' })
      const dateStr = meta.generatedAt || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      pdf.text(`Archived: ${dateStr}`, pageWidth - marginX, 16, { align: 'right' })

      pdf.setFillColor(8, 6, 18)
      pdf.rect(0, pageHeight - 14, pageWidth, 14, 'F')
      pdf.setDrawColor(70, 60, 90)
      pdf.setLineWidth(0.2)
      pdf.line(marginX, pageHeight - 14, pageWidth - marginX, pageHeight - 14)

      pdf.setFontSize(7)
      pdf.setTextColor(150, 140, 170)
      const sourceNote = meta.provenanceSource
        ? `Provenance: ${meta.provenanceSource.slice(0, 65)}`
        : 'Authenticated via Critical Edition Manuscripts & Archival Evidence Trails'
      pdf.text(sourceNote, marginX, pageHeight - 6)

      pdf.text(`Page ${curPage} of ${totalPagesEstimate}`, pageWidth - marginX, pageHeight - 6, { align: 'right' })
    }

    const totalPages = Math.max(1, Math.ceil(imgHeight / maxContentHeight))

    if (imgHeight <= maxContentHeight) {
      drawHeaderAndFooter(1, totalPages)
      pdf.addImage(imgData, 'JPEG', marginX, topMargin, imgWidth, imgHeight, undefined, 'FAST')
    } else {
      drawHeaderAndFooter(pageNumber, totalPages)
      pdf.addImage(imgData, 'JPEG', marginX, position, imgWidth, imgHeight, undefined, 'FAST')
      heightLeft -= maxContentHeight

      while (heightLeft > 0) {
        pageNumber++
        pdf.addPage()
        position = topMargin - (pageNumber - 1) * maxContentHeight
        drawHeaderAndFooter(pageNumber, totalPages)
        pdf.addImage(imgData, 'JPEG', marginX, position, imgWidth, imgHeight, undefined, 'FAST')
        heightLeft -= maxContentHeight
      }
    }

    const safeFilename = filename.toLowerCase().endsWith('.pdf') ? filename : `${filename}.pdf`
    pdf.save(safeFilename)
    return true
  } catch (err) {
    console.error('Error generating PDF:', err)
    return false
  }
}

/**
 * Generates a clean, typographic, source-authenticated archival PDF directly using jsPDF vectors
 * (Perfect for offline scholarly study, crystal clear typography and instant download).
 */
export async function generateStructuredArticlePdf(
  data: StructuredArticlePdfData,
  filename: string
): Promise<boolean> {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 16
    const usableWidth = pageWidth - margin * 2
    let y = 18

    // Dark heritage background fill
    pdf.setFillColor(10, 7, 22)
    pdf.rect(0, 0, pageWidth, pageHeight, 'F')

    // Top gold ornament bar
    pdf.setFillColor(212, 175, 55)
    pdf.rect(margin, y, usableWidth, 1.2, 'F')
    y += 7

    // Header Tag
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(212, 175, 55)
    pdf.text('AUM SANATANA KNOWLEDGE SYSTEMS · CIVILIZATIONAL ARCHIVE', margin, y)
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(170, 160, 190)
    pdf.text('AUTHENTICATED OFFLINE STUDY DOSSIER', pageWidth - margin, y, { align: 'right' })
    y += 8

    // Sanskrit / Category
    pdf.setFontSize(9)
    pdf.setTextColor(232, 197, 107)
    const categoryLine = `${data.category.toUpperCase()}  |  ${data.statusOrPeriod || 'PRIMARY SOURCE EVIDENCE'}`
    pdf.text(categoryLine, margin, y)
    y += 8

    // Main Title
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(18)
    pdf.setTextColor(255, 255, 255)
    const splitTitle = pdf.splitTextToSize(data.title, usableWidth)
    pdf.text(splitTitle, margin, y)
    y += splitTitle.length * 7 + 2

    // Sanskrit Subtitle
    if (data.sanskritTitle) {
      pdf.setFont('helvetica', 'italic')
      pdf.setFontSize(11)
      pdf.setTextColor(212, 175, 55)
      pdf.text(data.sanskritTitle, margin, y)
      y += 7
    }

    // Attribution / Timeline
    if (data.attribution) {
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9)
      pdf.setTextColor(180, 180, 200)
      pdf.text(data.attribution, margin, y)
      y += 6
    }

    // Divider line
    pdf.setDrawColor(212, 175, 55)
    pdf.setLineWidth(0.3)
    pdf.line(margin, y, pageWidth - margin, y)
    y += 7

    // Summary Section
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(10)
    pdf.setTextColor(232, 197, 107)
    pdf.text('ARCHIVAL SUMMARY & HISTORICAL CORE', margin, y)
    y += 5

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(9.5)
    pdf.setTextColor(220, 220, 235)
    const summaryLines = pdf.splitTextToSize(data.summary, usableWidth)
    pdf.text(summaryLines, margin, y)
    y += summaryLines.length * 4.8 + 6

    // Key points if available
    if (data.keyPoints && data.keyPoints.length > 0) {
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(9.5)
      pdf.setTextColor(232, 197, 107)
      pdf.text('KEY EVIDENCE & SCRIPTURAL FOUNDATIONS', margin, y)
      y += 5

      data.keyPoints.forEach((kp) => {
        if (y > pageHeight - 35) {
          pdf.addPage()
          pdf.setFillColor(10, 7, 22)
          pdf.rect(0, 0, pageWidth, pageHeight, 'F')
          y = 20
        }
        pdf.setFont('helvetica', 'bold')
        pdf.setFontSize(8.5)
        pdf.setTextColor(212, 175, 55)
        pdf.text(`• ${kp.label}:`, margin, y)

        pdf.setFont('helvetica', 'normal')
        pdf.setTextColor(200, 200, 215)
        const kpLines = pdf.splitTextToSize(kp.text, usableWidth - 10)
        pdf.text(kpLines, margin + 4, y + 4)
        y += kpLines.length * 4.2 + 5
      })
      y += 2
    }

    // Detailed Notes
    if (data.details) {
      if (y > pageHeight - 45) {
        pdf.addPage()
        pdf.setFillColor(10, 7, 22)
        pdf.rect(0, 0, pageWidth, pageHeight, 'F')
        y = 20
      }
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(9.5)
      pdf.setTextColor(232, 197, 107)
      pdf.text('HISTORICAL CONTEXT & DETAILED SCHOLARLY NOTES', margin, y)
      y += 5

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9)
      pdf.setTextColor(210, 210, 225)
      const detailLines = pdf.splitTextToSize(data.details, usableWidth)
      pdf.text(detailLines, margin, y)
      y += detailLines.length * 4.5 + 6
    }

    // Source Trail & Provenance Box
    if (y > pageHeight - 42) {
      pdf.addPage()
      pdf.setFillColor(10, 7, 22)
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')
      y = 20
    }

    const boxHeight = 26
    pdf.setFillColor(18, 14, 38)
    pdf.roundedRect(margin, y, usableWidth, boxHeight, 2, 2, 'F')
    pdf.setDrawColor(212, 175, 55)
    pdf.setLineWidth(0.3)
    pdf.roundedRect(margin, y, usableWidth, boxHeight, 2, 2, 'S')

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(212, 175, 55)
    pdf.text('VERIFIED SOURCE TRAIL & ARCHIVAL PROVENANCE', margin + 4, y + 6)

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(7.5)
    pdf.setTextColor(190, 190, 205)
    const provText = data.provenance || data.sourceNotes || 'Archival Survey, Epigraphia Indica & Contemporary Institutional Documentation'
    const provLines = pdf.splitTextToSize(provText, usableWidth - 8)
    pdf.text(provLines, margin + 4, y + 11)

    // Security Verification Seal
    pdf.setTextColor(160, 150, 180)
    pdf.text('Archived for independent verification and offline research · AUM Critical Edition Standards', margin + 4, y + 21)

    // Footer at bottom of each page
    const totalPages = pdf.internal.pages.length - 1
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i)
      pdf.setDrawColor(60, 50, 80)
      pdf.setLineWidth(0.2)
      pdf.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12)

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(7)
      pdf.setTextColor(140, 135, 160)
      pdf.text('AUM Sanātana Knowledge Systems — Free Knowledge Repository', margin, pageHeight - 6)
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 6, { align: 'right' })
    }

    const safeFilename = filename.toLowerCase().endsWith('.pdf') ? filename : `${filename}.pdf`
    pdf.save(safeFilename)
    return true
  } catch (err) {
    console.error('Failed to generate structured PDF:', err)
    return false
  }
}
